'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiCheck, FiArchive, FiSearch, FiFilter, FiClock, FiCheckCircle, FiPhoneOutgoing } from 'react-icons/fi'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { supabase } from '@/lib/supabase'
import Skeleton from '@/custom/skeleton/Skeleton'
import styles from './EnquiryDashboard.module.css'

interface Quote {
  id: string
  name: string
  phone: string
  service: string
  status: 'new' | 'contacted' | 'not_received' | 'interested' | 'call_later' | 'not_interested' | 'spam'
  created_at: string
}

const QuoteDashboard = () => {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState<'all' | 'new' | 'contacted' | 'not_received' | 'interested' | 'call_later' | 'not_interested' | 'spam'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  useEffect(() => {
    fetchQuotes()
  }, [])

  const fetchQuotes = async () => {
    try {
      const { data, error } = await supabase
        .from('quotes')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setQuotes(data || [])
    } catch (error) {
      console.error('Error fetching quotes:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateQuoteStatus = async (id: string, status: Quote['status']) => {
    try {
      const { error } = await supabase
        .from('quotes')
        .update({ status })
        .eq('id', id)

      if (error) throw error

      setQuotes(quotes.map(quote =>
        quote.id === id ? { ...quote, status } : quote
      ))
    } catch (error) {
      console.error('Error updating quote:', error)
    }
  }

  const getStatusIcon = (status: Quote['status']) => {
    switch (status) {
      case 'new': return <FiClock className={styles.newIcon} />
      case 'contacted': return <FiPhone className={styles.contactedIcon} />
      case 'not_received': return <FiArchive className={styles.notReceivedIcon} />
      case 'interested': return <FiCheckCircle className={styles.interestedIcon} />
      case 'call_later': return <FiClock className={styles.callLaterIcon} />
      case 'not_interested': return <FiArchive className={styles.notInterestedIcon} />
      case 'spam': return <FiArchive className={styles.spamIcon} />
      default: return null
    }
  }

  const handleWhatsApp = (phone: string) => {
    const countryCode = '91' // India country code
    const cleanPhone = phone.replace(/\D/g, '')
    const whatsappPhone = cleanPhone.startsWith(countryCode) ? cleanPhone : countryCode + cleanPhone
    window.open(`https://wa.me/${whatsappPhone}`, '_blank')
  }

  const handleCall = (phone: string) => {
    window.location.href = `tel:${phone}`
  }

  const filteredQuotes = quotes.filter(quote => {
    const matchesFilter = activeFilter === 'all' || quote.status === activeFilter
    const matchesSearch =
      quote.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.service.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesFilter && matchesSearch
  })

  const totalPages = Math.ceil(filteredQuotes.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedQuotes = filteredQuotes.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)))
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Quote Requests</h1>
          <div className={styles.stats}>
            {['new', 'contacted', 'interested', 'call_later'].map((status) => (
              <div key={status} className={styles.statItem}>
                {getStatusIcon(status as Quote['status'])}
                <span>{status.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}:</span>
                <span className={styles.statNumber}>
                  {quotes.filter(q => q.status === status).length}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <div className={styles.search}>
            <FiSearch />
            <input
              type="text"
              placeholder="Search quotes..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setCurrentPage(1)
              }}
            />
          </div>

          <div className={styles.filters}>
            <FiFilter />
            {['all', 'new', 'contacted', 'interested', 'call_later', 'not_interested', 'spam'].map((filter) => (
              <button
                key={filter}
                className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ''}`}
                onClick={() => {
                  setActiveFilter(filter as typeof activeFilter)
                  setCurrentPage(1)
                }}
              >
                {filter === 'all' ? 'All' : filter.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          {loading ? (
            <div className={styles.loadingSkeleton}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <Skeleton key={idx} width="100%" height="40px" style={{ marginBottom: '10px' }} />
              ))}
            </div>
          ) : paginatedQuotes.length === 0 ? (
            <div className={styles.empty}>
              <FiSearch size={40} />
              <p>No quotes found</p>
            </div>
          ) : (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Service</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Change Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedQuotes.map((quote) => (
                  <motion.tr
                    key={quote.id}
                    className={`${styles.tableRow} ${styles[quote.status]}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <td>{quote.name}</td>
                    <td>{quote.phone}</td>
                    <td>{quote.service}</td>
                    <td>
                      <span className={`${styles.statusBadge} ${styles[quote.status]}`}>
                        {getStatusIcon(quote.status)}
                        {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
                      </span>
                    </td>
                    <td>{new Date(quote.created_at).toLocaleDateString()}</td>
                    <td>
                      <div className={styles.statusActions}>
                        <select
                          className={`${styles.statusDropdown} ${styles[quote.status]}`}
                          value={quote.status}
                          onChange={(e) => updateQuoteStatus(quote.id, e.target.value as Quote['status'])}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="not_received">Not Received</option>
                          <option value="interested">Interested</option>
                          <option value="call_later">Call Later</option>
                          <option value="not_interested">Not Interested</option>
                          <option value="spam">Spam</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div className={styles.actions}>
                        <button
                          className={`${styles.actionBtn} ${styles.whatsapp}`}
                          onClick={() => handleWhatsApp(quote.phone)}
                          title="WhatsApp"
                        >
                          <WhatsAppIcon sx={{ fontSize: 18 }} />
                        </button>
                        <button
                          className={`${styles.actionBtn} ${styles.call}`}
                          onClick={() => handleCall(quote.phone)}
                          title="Call"
                        >
                          <FiPhoneOutgoing />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <div className={styles.pagination}>
          <div className={styles.paginationInfo}>
            Showing {paginatedQuotes.length === 0 ? 0 : startIndex + 1} to {startIndex + paginatedQuotes.length} of {filteredQuotes.length}
          </div>

          <div className={styles.paginationControls}>
            <button
              className={styles.paginationBtn}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            <div className={styles.pageButtons}>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  className={`${styles.pageBtn} ${currentPage === page ? styles.active : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              className={styles.paginationBtn}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>

          <div className={styles.itemsPerPage}>
            <label>Items per page:</label>
            <select value={itemsPerPage} onChange={(e) => {
              setItemsPerPage(Number(e.target.value))
              setCurrentPage(1)
            }}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
              <option value={filteredQuotes.length}>All</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}


export default QuoteDashboard;