'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiInbox, FiCheck, FiX, FiArchive, FiSearch, FiFilter } from 'react-icons/fi'
import { supabase } from '@/lib/supabase'
import Skeleton from '@/custom/skeleton/Skeleton'
import styles from './ContactDashboard.module.css'

interface Contact {
    id: string
    name: string
    number: string
    subject: string
    message: string
    status: 'new' | 'read' | 'archived'
    created_at: string
}

const ContactDashboard = () => {
    const [contacts, setContacts] = useState<Contact[]>([])
    const [loading, setLoading] = useState(true)
    const [activeFilter, setActiveFilter] = useState<'all' | 'new' | 'read' | 'archived'>('all')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

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

    const updateContactStatus = async (id: string, status: 'new' | 'read' | 'archived') => {
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

    const filteredContacts = contacts.filter(contact => {
        const matchesFilter = activeFilter === 'all' || contact.status === activeFilter
        const matchesSearch =
            contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.number.toLowerCase().includes(searchQuery.toLowerCase()) ||
            contact.subject.toLowerCase().includes(searchQuery.toLowerCase())

        return matchesFilter && matchesSearch
    })

    return (
        <div className={styles.dashboard}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1>Contact Submissions</h1>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <FiInbox />
                            <span>New: {contacts.filter(c => c.status === 'new').length}</span>
                        </div>
                        <div className={styles.statItem}>
                            <FiCheck />
                            <span>Read: {contacts.filter(c => c.status === 'read').length}</span>
                        </div>
                        <div className={styles.statItem}>
                            <FiArchive />
                            <span>Archived: {contacts.filter(c => c.status === 'archived').length}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.controls}>
                    <div className={styles.search}>
                        <FiSearch />
                        <input
                            type="text"
                            placeholder="Search contacts..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className={styles.filters}>
                        <FiFilter />
                        <button
                            className={`${styles.filterButton} ${activeFilter === 'all' ? styles.active : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            All
                        </button>
                        <button
                            className={`${styles.filterButton} ${activeFilter === 'new' ? styles.active : ''}`}
                            onClick={() => setActiveFilter('new')}
                        >
                            New
                        </button>
                        <button
                            className={`${styles.filterButton} ${activeFilter === 'read' ? styles.active : ''}`}
                            onClick={() => setActiveFilter('read')}
                        >
                            Read
                        </button>
                        <button
                            className={`${styles.filterButton} ${activeFilter === 'archived' ? styles.active : ''}`}
                            onClick={() => setActiveFilter('archived')}
                        >
                            Archived
                        </button>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.contactsList}>
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
                        ) : filteredContacts.length === 0 ? (
                            <div className={styles.empty}>No contacts found</div>
                        ) : (
                            filteredContacts.map((contact) => (
                                <motion.div
                                    key={contact.id}
                                    layoutId={contact.id}
                                    className={`${styles.contactCard} ${styles[contact.status]}`}
                                    onClick={() => setSelectedContact(contact)}
                                >
                                    <div className={styles.contactHeader}>
                                        <h3>{contact.name}</h3>
                                        <span className={styles.date}>
                                            {new Date(contact.created_at).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <p className={styles.subject}>Subject: {contact.subject}</p>
                                    <p className={styles.subject}>Message: {contact.message}</p>

                                    <div className={styles.contactMeta}>
                                        <span>{contact.number}</span>
                                        <div className={styles.actions}>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    updateContactStatus(contact.id, 'read')
                                                }}
                                                className={styles.actionButton}
                                            >
                                                <FiCheck />
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    updateContactStatus(contact.id, 'archived')
                                                }}
                                                className={styles.actionButton}
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
                {selectedContact && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.modal}
                        onClick={() => setSelectedContact(null)}
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
                                onClick={() => setSelectedContact(null)}
                            >
                                <FiX />
                            </button>
                            <h2>{selectedContact.subject}</h2>
                            <div className={styles.modalMeta}>
                                <span>From: {selectedContact.name}</span>
                                <span>Number: {selectedContact.number}</span>
                                <span>Subject: {selectedContact.subject}</span>
                                <span>Date: {new Date(selectedContact.created_at).toLocaleString()}</span>
                            </div>
                            <div className={styles.messageContent}>
                                Message: {selectedContact.message}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default ContactDashboard