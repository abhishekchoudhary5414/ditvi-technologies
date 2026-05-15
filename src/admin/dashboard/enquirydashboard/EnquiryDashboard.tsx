'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiCheck, FiX, FiArchive, FiSearch, FiFilter, FiClock, FiCheckCircle } from 'react-icons/fi'
import { supabase } from '@/lib/supabase'
import Skeleton from '@/custom/skeleton/Skeleton'
import styles from './EnquiryDashboard.module.css'

interface Quote {
  id: string
  name: string
  phone: string
  service: string
  status: 'pending' | 'contacted' | 'completed' | 'archived'
  created_at: string
}

const QuoteDashboard = () => {
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState<'all' | 'pending' | 'contacted' | 'completed' | 'archived'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null)

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
      case 'pending': return <FiClock className={styles.pendingIcon} />
      case 'contacted': return <FiPhone className={styles.contactedIcon} />
      case 'completed': return <FiCheckCircle className={styles.completedIcon} />
      case 'archived': return <FiArchive className={styles.archivedIcon} />
      default: return null
    }
  }

  const filteredQuotes = quotes.filter(quote => {
    const matchesFilter = activeFilter === 'all' || quote.status === activeFilter
    const matchesSearch =
      quote.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quote.service.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesFilter && matchesSearch
  })

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Quote Requests</h1>
          <div className={styles.stats}>
            {['pending', 'contacted', 'completed', 'archived'].map((status) => (
              <div key={status} className={styles.statItem}>
                {getStatusIcon(status as Quote['status'])}
                <span>{status.charAt(0).toUpperCase() + status.slice(1)}:</span>
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
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.filters}>
            <FiFilter />
            {['all', 'pending', 'contacted', 'completed', 'archived'].map((filter) => (
              <button
                key={filter}
                className={`${styles.filterButton} ${activeFilter === filter ? styles.active : ''}`}
                onClick={() => setActiveFilter(filter as typeof activeFilter)}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.quotesList}>
            {loading ? (
              <div className={styles.loadingSkeleton}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div key={idx} className={styles.skeletonCard}>
                    <Skeleton width="30%" height="20px" />
                    <Skeleton width="100%" height="25px" style={{ marginTop: '10px' }} />
                    <Skeleton width="80%" height="18px" style={{ marginTop: '8px' }} />
                    <Skeleton width="60%" height="18px" style={{ marginTop: '8px' }} />
                  </div>
                ))}
              </div>
            ) : filteredQuotes.length === 0 ? (
              <div className={styles.empty}>
                <FiSearch size={40} />
                <p>No quotes found</p>
              </div>
            ) : (
              filteredQuotes.map((quote) => (
                <motion.div
                  key={quote.id}
                  layoutId={quote.id}
                  className={`${styles.quoteCard} ${styles[quote.status]}`}
                  onClick={() => setSelectedQuote(quote)}
                >
                  <div className={styles.quoteHeader}>
                    <h3>{quote.name}</h3>
                    <span className={styles.date}>
                      {new Date(quote.created_at).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className={styles.serviceInfo}>
                    <span>Service: {quote.service}</span>
                    <div className={styles.statusBadge}>
                      {getStatusIcon(quote.status)}
                      <span>{quote.status}</span>
                    </div>
                  </div>

                  <div className={styles.quoteMeta}>
                    <span>{quote.phone}</span>
                    <div className={styles.actions}>
                      {quote.status === 'pending' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            updateQuoteStatus(quote.id, 'contacted')
                          }}
                          className={styles.actionButton}
                          title="Mark as Contacted"
                        >
                          <FiPhone />
                        </button>
                      )}
                      {quote.status === 'contacted' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            updateQuoteStatus(quote.id, 'completed')
                          }}
                          className={styles.actionButton}
                          title="Mark as Completed"
                        >
                          <FiCheck />
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          updateQuoteStatus(quote.id, 'archived')
                        }}
                        className={styles.actionButton}
                        title="Archive Quote"
                      >
                        <FiArchive />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedQuote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modal}
            onClick={() => setSelectedQuote(null)}
          >
            <motion.div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button
                className={styles.closeModal}
                onClick={() => setSelectedQuote(null)}
              >
                <FiX />
              </button>
              <h2>Quote Request Details</h2>
              <div className={styles.modalMeta}>
                <div className={styles.metaItem}>
                  <strong>Name:</strong> {selectedQuote.name}
                </div>
                <div className={styles.metaItem}>
                  <strong>Phone:</strong> {selectedQuote.phone}
                </div>
                <div className={styles.metaItem}>
                  <strong>Service:</strong> {selectedQuote.service}
                </div>
                <div className={styles.metaItem}>
                  <strong>Status:</strong>
                  <span className={`${styles.statusBadge} ${styles[selectedQuote.status]}`}>
                    {getStatusIcon(selectedQuote.status)}
                    {selectedQuote.status}
                  </span>
                </div>
                <div className={styles.metaItem}>
                  <strong>Requested on:</strong>
                  {new Date(selectedQuote.created_at).toLocaleString()}
                </div>
              </div>
              <div className={styles.modalActions}>
                {selectedQuote.status === 'pending' && (
                  <button
                    onClick={() => updateQuoteStatus(selectedQuote.id, 'contacted')}
                    className={styles.actionButtonLarge}
                  >
                    <FiPhone /> Mark as Contacted
                  </button>
                )}
                {selectedQuote.status === 'contacted' && (
                  <button
                    onClick={() => updateQuoteStatus(selectedQuote.id, 'completed')}
                    className={styles.actionButtonLarge}
                  >
                    <FiCheck /> Mark as Completed
                  </button>
                )}
                <button
                  onClick={() => updateQuoteStatus(selectedQuote.id, 'archived')}
                  className={`${styles.actionButtonLarge} ${styles.archiveButton}`}
                >
                  <FiArchive /> Archive Quote
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default QuoteDashboard