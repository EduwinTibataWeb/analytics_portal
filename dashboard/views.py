from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def dashboard_view(request):
    data = [
    {
        'fecha': '2024-01-01',
        'cliente': 'Google',
        'metrica': 'Ventas',
        'valor': 12500
    },
    {
        'fecha': '2024-01-02',
        'cliente': 'Amazon',
        'metrica': 'Ventas',
        'valor': 18700
    },
    {
        'fecha': '2024-01-03',
        'cliente': 'Microsoft',
        'metrica': 'Ventas',
        'valor': 15400
    },
    {
        'fecha': '2024-01-04',
        'cliente': 'Apple',
        'metrica': 'Ventas',
        'valor': 22100
    },
    {
        'fecha': '2024-01-05',
        'cliente': 'Meta',
        'metrica': 'Ventas',
        'valor': 9800
    },
    {
        'fecha': '2024-01-06',
        'cliente': 'Netflix',
        'metrica': 'Ventas',
        'valor': 7600
    },
    {
        'fecha': '2024-01-07',
        'cliente': 'Spotify',
        'metrica': 'Ventas',
        'valor': 5400
    },
    {
        'fecha': '2024-01-08',
        'cliente': 'Uber',
        'metrica': 'Ventas',
        'valor': 11200
    },
    {
        'fecha': '2024-01-09',
        'cliente': 'Airbnb',
        'metrica': 'Ventas',
        'valor': 13400
    },
    {
        'fecha': '2024-01-10',
        'cliente': 'Stripe',
        'metrica': 'Ventas',
        'valor': 16900
    },
    {
        'fecha': '2024-01-11',
        'cliente': 'Shopify',
        'metrica': 'Ventas',
        'valor': 8900
    },
    {
        'fecha': '2024-01-12',
        'cliente': 'Salesforce',
        'metrica': 'Ventas',
        'valor': 14300
    }
]


    context = {
        'title': 'Portal Analítico',
        'data': data
    }

    return render(request, 'dashboard/dashboard.html', context)