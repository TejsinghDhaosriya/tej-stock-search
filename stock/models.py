from django.conf import settings
from django.db import models
from django.utils.translation import ugettext_lazy as _

from model_utils.models import TimeStampedModel

from core.behaviours import StatusMixin



class Stock(StatusMixin, TimeStampedModel):
    name = models.CharField(_('name'), max_length=255, blank=False, null=False)
    marketCap = models.CharField(_('marketCap'), max_length=255, blank=False, null=False)
    currentPrice = models.CharField(_('currentPrice'), max_length=255, blank=False, null=False)
    stockPE = models.CharField(_('stockPE'), max_length=255, blank=False, null=False)
    dividendYield = models.CharField(_('dividendYield'), max_length=255, blank=False, null=False)
    roce = models.CharField(_('roce'), max_length=255, blank=False, null=False)
    roe = models.CharField(_('roe'), max_length=255, blank=False, null=False)
    debtToEquity = models.CharField(_('debtToEquity'), max_length=255, blank=False, null=False)
    eps = models.CharField(_('eps'), max_length=255, blank=False, null=False)
    reserves = models.CharField(_('reserves'), max_length=255, blank=False, null=False)
    debt = models.CharField(_('debt'), max_length=255, blank=False, null=False)
    
    def __str__(self):
        return self.name
