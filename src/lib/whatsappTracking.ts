import { supabase } from '@/lib/supabase'

const parseBrowser = (ua: string) => {
  if (/chrome|chromium|crios/i.test(ua) && !/edg/i.test(ua)) return 'Chrome'
  if (/firefox|fxios/i.test(ua)) return 'Firefox'
  if (/safari/i.test(ua) && !/chrome|chromium|crios/i.test(ua)) return 'Safari'
  if (/edg/i.test(ua)) return 'Edge'
  if (/opera|opr/i.test(ua)) return 'Opera'
  return 'Other'
}

const parseDeviceType = (ua: string) => {
  if (/mobile|iphone|ipod|android|blackberry|iemobile|opera mini/i.test(ua)) return 'Mobile'
  if (/ipad|tablet|tab/i.test(ua)) return 'Tablet'
  return 'Desktop'
}

export const trackWhatsAppClick = async (source: string = 'unknown') => {
  if (typeof window === 'undefined') return

  try {
    const userAgent = navigator.userAgent || ''

    await supabase.from('whatsapp_clicks').insert([
      {
        source,
        page_url: window.location.pathname,
        page_title: document.title || null,
        referrer: document.referrer || null,
        browser: parseBrowser(userAgent),
        device_type: parseDeviceType(userAgent),
        user_agent: userAgent,
        clicked_at: new Date().toISOString(),
      },
    ])
  } catch (error) {
    console.error('WhatsApp click tracking failed:', error)
  }
}

export const buildWhatsAppUrl = (phone: string, message: string) => {
  const cleanPhone = phone.replace(/\D/g, '')
  const normalizedPhone = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`
}
