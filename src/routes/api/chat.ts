import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/api/chat')({
  server: {
    handlers: {
      GET: async () => {
        return Response.json({
          success: true,
          message: 'Alligentics API is working',
        })
      },

      POST: async () => {
        return Response.json({
          success: true,
          message: 'Alligentics chat POST is working',
        })
      },
    },
  },
})
