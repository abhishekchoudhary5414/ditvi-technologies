'use client'

import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiClock, FiSmartphone, FiMonitor, FiActivity, FiSearch } from 'react-icons/fi'
import { supabase } from '@/lib/supabase'
import styles from './WhatsAppDashboard.module.css'

interface WhatsAppClick {
  id: string
  page_url: string
  page_title: string | null
  browser: string | null
  device_type: string | null
  user_agent: string | null
  referrer: string | null
  created_at?: string
  clicked_at?: string
}

const formatDate = (value?: string) =>
  value ? new Date(value).toLocaleString() : 'Unknown'

const WhatsAppDashboard = () => {
  const [clicks, setClicks] = useState<WhatsAppClick[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [timeFilter, setTimeFilter] = useState<'all' | 'today' | 'custom'>('all')
  const [sortMode, setSortMode] = useState<'newest' | 'oldest' | 'trending'>('newest')
  const [rangeStart, setRangeStart] = useState('')
  const [rangeEnd, setRangeEnd] = useState('')
  const [selectedClick, setSelectedClick] = useState<WhatsAppClick | null>(null)

  const openDetails = (item: WhatsAppClick) => setSelectedClick(item)
  const closeDetails = () => setSelectedClick(null)

  useEffect(() => {
    fetchClicks()
  }, [])

  const fetchClicks = async () => {
    try {
      const { data, error } = await supabase
        .from('whatsapp_clicks')
        .select('*')

      if (error) throw error
      setClicks(data || [])
    } catch (error) {
      console.error('Error fetching WhatsApp clicks:', error)
    } finally {
      setLoading(false)
    }
  }

  const getTimestamp = (item: WhatsAppClick) => item.created_at || item.clicked_at || ''

  const isSameDay = (dateA: Date, dateB: Date) =>
    dateA.getDate() === dateB.getDate() &&
    dateA.getMonth() === dateB.getMonth() &&
    dateA.getFullYear() === dateB.getFullYear()

  const pageCounts = useMemo(() => {
    return clicks.reduce((acc, item) => {
      const page = item.page_url || 'Unknown'
      acc[page] = (acc[page] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  }, [clicks])

  const trendingPages = useMemo(
    () =>
      Object.entries(pageCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8),
    [pageCounts]
  )

  const filteredClicks = useMemo(() => {
    const now = new Date()
    const startDate = rangeStart ? new Date(rangeStart) : null
    const endDate = rangeEnd ? new Date(rangeEnd) : null

    return clicks
      .filter((item) => {
        const timestamp = getTimestamp(item)
        if (!timestamp) return false

        const date = new Date(timestamp)

        if (timeFilter === 'today' && !isSameDay(date, now)) {
          return false
        }

        if (timeFilter === 'custom') {
          if (startDate && date < startDate) return false
          if (endDate && date > new Date(endDate.getTime() + 24 * 60 * 60 * 1000 - 1)) return false
        }

        const query = searchQuery.toLowerCase()
        return (
          item.page_url.toLowerCase().includes(query) ||
          item.page_title?.toLowerCase().includes(query) ||
          item.browser?.toLowerCase().includes(query) ||
          item.device_type?.toLowerCase().includes(query)
        )
      })
      .sort((a, b) => {
        if (sortMode === 'trending') {
          const countA = pageCounts[a.page_url] || 0
          const countB = pageCounts[b.page_url] || 0
          return countB - countA || new Date(getTimestamp(b)).getTime() - new Date(getTimestamp(a)).getTime()
        }

        const dateA = new Date(getTimestamp(a)).getTime()
        const dateB = new Date(getTimestamp(b)).getTime()
        return sortMode === 'oldest' ? dateA - dateB : dateB - dateA
      })
  }, [clicks, searchQuery, timeFilter, rangeStart, rangeEnd, sortMode, pageCounts])

  const totalClicks = clicks.length
  const todayClicks = clicks.filter((item) => {
    const timestamp = getTimestamp(item)
    if (!timestamp) return false
    return isSameDay(new Date(timestamp), new Date())
  }).length

  const deviceCounts = useMemo(() => {
    return clicks.reduce(
      (acc, item) => {
        const key = item.device_type || 'Unknown'
        acc[key] = (acc[key] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )
  }, [clicks])

  const browserCounts = useMemo(() => {
    return clicks.reduce(
      (acc, item) => {
        const key = item.browser || 'Unknown'
        acc[key] = (acc[key] || 0) + 1
        return acc
      },
      {} as Record<string, number>
    )
  }, [clicks])

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <div>
          <h1>WhatsApp Click Dashboard</h1>
          <p>Track bottom WhatsApp button clicks, page origin, browser, device type and click time.</p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}><FiActivity /></div>
          <p className={styles.statLabel}>Total Clicks</p>
          <p className={styles.statNumber}>{totalClicks}</p>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}><FiClock /></div>
          <p className={styles.statLabel}>Today</p>
          <p className={styles.statNumber}>{todayClicks}</p>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}><FiSmartphone /></div>
          <p className={styles.statLabel}>Mobile Clicks</p>
          <p className={styles.statNumber}>{deviceCounts.Mobile || 0}</p>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}><FiMonitor /></div>
          <p className={styles.statLabel}>Desktop Clicks</p>
          <p className={styles.statNumber}>{deviceCounts.Desktop || 0}</p>
        </div>
      </div>

      <div className={styles.toolbar}>
        <div className={styles.filterGroup}>
          <button
            className={timeFilter === 'all' ? styles.activeFilter : ''}
            onClick={() => setTimeFilter('all')}
          >
            All time
          </button>
          <button
            className={timeFilter === 'today' ? styles.activeFilter : ''}
            onClick={() => setTimeFilter('today')}
          >
            Today
          </button>
          <button
            className={timeFilter === 'custom' ? styles.activeFilter : ''}
            onClick={() => setTimeFilter('custom')}
          >
            Custom range
          </button>
        </div>

        <div className={styles.filterGroup}>
          <button
            className={sortMode === 'newest' ? styles.activeFilter : ''}
            onClick={() => setSortMode('newest')}
          >
            Newest
          </button>
          <button
            className={sortMode === 'oldest' ? styles.activeFilter : ''}
            onClick={() => setSortMode('oldest')}
          >
            Oldest
          </button>
          <button
            className={sortMode === 'trending' ? styles.activeFilter : ''}
            onClick={() => setSortMode('trending')}
          >
            Trending page
          </button>
        </div>
      </div>

      {timeFilter === 'custom' && (
        <div className={styles.dateControls}>
          <label>
            From:
            <input
              type="date"
              value={rangeStart}
              onChange={(e) => setRangeStart(e.target.value)}
            />
          </label>
          <label>
            To:
            <input
              type="date"
              value={rangeEnd}
              onChange={(e) => setRangeEnd(e.target.value)}
            />
          </label>
        </div>
      )}

      <div className={styles.trendingPanel}>
        <h3>Trending pages</h3>
        {trendingPages.length === 0 ? (
          <p className={styles.trendingEmpty}>No pages tracked yet.</p>
        ) : (
          <ol className={styles.trendingList}>
            {trendingPages.map(([page, count]) => (
              <li key={page} className={styles.trendingItem}>
                <span className={styles.trendingCount}>{count}</span>
                <span className={styles.trendingPage} title={page}>{page}</span>
              </li>
            ))}
          </ol>
        )}
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <h2>Click log</h2>
          <div className={styles.searchBox}>
            <FiSearch />
            <input
              type="text"
              placeholder="Search page, browser, device..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.tableWrapper}>
          {loading ? (
            <div className={styles.loading}>Loading click data...</div>
          ) : filteredClicks.length === 0 ? (
            <div className={styles.empty}>No WhatsApp clicks found yet.</div>
          ) : (
            <table className={styles.clickTable}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Time</th>
                  <th>Page</th>
                  <th>Browser</th>
                  <th>Device</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {filteredClicks.map((item, index) => (
                  <motion.tr key={item.id} whileHover={{ y: -2 }}>
                    <td>{index + 1}</td>
                    <td>{formatDate(getTimestamp(item))}</td>
                    <td className={styles.truncated} title={item.page_url}>{item.page_url}</td>
                    <td>{item.browser || 'Unknown'}</td>
                    <td>{item.device_type || 'Unknown'}</td>
                    <td>
                      <button
                        className={styles.detailsButton}
                        onClick={() => openDetails(item)}
                        type="button"
                      >
                        View
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {selectedClick && (
        <div className={styles.modalBackdrop} onClick={closeDetails}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModal} onClick={closeDetails} type="button">
              ×
            </button>
            <h3>WhatsApp click details</h3>
            <div className={styles.detailList}>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>ID</span>
                <span className={styles.detailValue}>{selectedClick.id}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Time</span>
                <span className={styles.detailValue}>{formatDate(getTimestamp(selectedClick))}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Page URL</span>
                <span className={styles.detailValue}>{selectedClick.page_url}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Page title</span>
                <span className={styles.detailValue}>{selectedClick.page_title || '—'}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Browser</span>
                <span className={styles.detailValue}>{selectedClick.browser || '—'}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Device</span>
                <span className={styles.detailValue}>{selectedClick.device_type || '—'}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Referrer</span>
                <span className={styles.detailValue}>{selectedClick.referrer || '—'}</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>User agent</span>
                <span className={styles.detailValue}>{selectedClick.user_agent || '—'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WhatsAppDashboard
