from django.shortcuts import render

# Create your views here.
from django.shortcuts import render

def dashboard_view(request):
    data = [
        {
            'fecha': '2024-01-01',
            'cliente': 'Cliente A',
            'metrica': 'Ventas',
            'valor': 1500
        },
        {
            'fecha': '2024-01-02',
            'cliente': 'Cliente B',
            'metrica': 'Ventas',
            'valor': 2300
        },
        {
            'fecha': '2024-01-03',
            'cliente': 'Cliente C',
            'metrica': 'Ventas',
            'valor': 980
        }
    ]

    context = {
        'title': 'Portal Analítico',
        'data': data
    }

    return render(request, 'dashboard/dashboard.html', context)