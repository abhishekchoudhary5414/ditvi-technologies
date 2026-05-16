'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiCheck, FiArchive, FiSearch, FiFilter, FiClock, FiCheckCircle, FiPhoneOutgoing } from 'react-icons/fi'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { supabase } from '@/lib/supabase'
import Skeleton from '@/custom/skeleton/Skeleton'
import styles from './ContactDashboard.module.css'

interface Contact {
    id: string
    name: string
    number: string
    subject: string
    message: string
    status: 'new' | 'contacted' | 'not_received' | 'interested' | 'call_later' | 'not_interested' | 'spam'
    created_at: string
}

const ContactDashboard = () => {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [loading, setLoading] = useState(true)
    const [activeFilter, setActiveFilter] = useState<'all' | 'new' | 'contacted' | 'not_received' | 'interested' | 'call_later' | 'not_interested' | 'spam'>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    useEffect(() => {
        fetchContacts()
    }, [])

    const fetchContacts = async () => {
        try {
            const { data, error } = await supabase
                .from("contacts")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setContacts(data || []);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching contacts:", error);
            setLoading(false);
        }
    };

    const getStatusIcon = (status: Contact['status']) => {
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



    const updateContactStatus = async (id: string, status: Contact['status']) => {
        try {
            const { error } = await supabase
                .from('contacts')
                .update({ status })
                .eq('id', id)

            if (error) throw error

            setContacts(contacts.map(contact =>
                contact.id === id ? { ...contact, status } : contact
            ))
        } catch (error) {
            console.error('Error updating contact:', error)
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

    const filteredContacts = contacts.filter(contact => {
        const matchesFilter = activeFilter === 'all' || contact.status === activeFilter
        const matchesSearch =
            contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.subject.toLowerCase().includes(searchQuery.toLowerCase())

        return matchesFilter && matchesSearch
    })

    const totalPages = Math.ceil(filteredContacts.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const paginatedContacts = filteredContacts.slice(startIndex, startIndex + itemsPerPage)

    const handlePageChange = (page: number) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)))
    }

    return (
        <div className={styles.dashboard}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Contact Submissions</h1>
                    <div className={styles.stats}>
                        {['new', 'contacted', 'interested', 'call_later'].map((status) => (
                            <div key={status} className={styles.statItem}>
                                {getStatusIcon(status as Contact['status'])}
                                <span>{status.split('_').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}:</span>
                                <span className={styles.statNumber}>
                                    {contacts.filter(c => c.status === status).length}
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
                            placeholder="Search contacts..."
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
                    ) : paginatedContacts.length === 0 ? (
                        <div className={styles.empty}>
                            <FiSearch size={40} />
                            <p>No contacts found</p>
                        </div>
                    ) : (
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Message</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Change Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedContacts.map((contact) => (
                                    <motion.tr
                                        key={contact.id}
                                        className={`${styles.tableRow} ${styles[contact.status]}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <td>{contact.name}</td>
                                        <td>{contact.number}</td>
                                        <td className={styles.messageCell}>{contact.message.substring(0, 50)}...</td>
                                        <td>
                                            <span className={`${styles.statusBadge} ${styles[contact.status]}`}>
                                                {getStatusIcon(contact.status)}
                                                {contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                                            </span>
                                        </td>
                                        <td>{new Date(contact.created_at).toLocaleDateString()}</td>
                                        <td>
                                            <div className={styles.statusActions}>
                                                <select
                                                    className={`${styles.statusDropdown} ${styles[contact.status]}`}
                                                    value={contact.status}
                                                    onChange={(e) => updateContactStatus(contact.id, e.target.value as Contact['status'])}
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
                                                    onClick={() => handleWhatsApp(contact.number)}
                                                    title="WhatsApp"
                                                >
                                                    <WhatsAppIcon sx={{ fontSize: 18 }} />
                                                </button>
                                                <button
                                                    className={`${styles.actionBtn} ${styles.call}`}
                                                    onClick={() => handleCall(contact.number)}
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
                        Showing {paginatedContacts.length === 0 ? 0 : startIndex + 1} to {startIndex + paginatedContacts.length} of {filteredContacts.length}
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
                            <option value={filteredContacts.length}>All</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDashboard