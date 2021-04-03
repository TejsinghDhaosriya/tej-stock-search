from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from stock.api.views import StockViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

# stock
router.register("stock", StockViewSet)


app_name = "api"
urlpatterns = router.urls
