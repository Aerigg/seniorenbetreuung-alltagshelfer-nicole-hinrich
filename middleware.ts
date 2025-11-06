import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')

  // Nur in Produktion aktiv, nicht in lokaler Entwicklung
  if (host && !host.startsWith('localhost') && !host.startsWith('127.0.0.1')) {
    // Wenn die Domain ohne www aufgerufen wird, leite zu www weiter
    if (!host.startsWith('www.')) {
      const url = request.nextUrl.clone()
      url.host = `www.${host}`
      return NextResponse.redirect(url, 301) // 301 = permanente Weiterleitung
    }
  }

  return NextResponse.next()
}

// Konfiguration: Auf welche Pfade soll die Middleware angewendet werden
export const config = {
  matcher: [
    /*
     * Matche alle Request-Pfade außer:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Dateien mit Endungen (.png, .jpg, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}
