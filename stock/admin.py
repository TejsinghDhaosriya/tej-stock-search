from django.contrib import admin

from import_export.admin import ImportExportActionModelAdmin

from .models import Stock


@admin.register(Stock)
class StockAdmin(ImportExportActionModelAdmin):
    model = Stock
    list_display = ['name', 'marketCap','currentPrice','stockPE', 'dividendYield', 'roce', 'roe','debtToEquity','eps','reserves','debt',
                    ]
    # list_display = ['name', 'marketCap','currentPrice','stockPE', 'dividendYield', 'roce', 'roe','debtToEquity','eps','reserves','debt','created',
    #                 'modified']
    list_filter = list_display
