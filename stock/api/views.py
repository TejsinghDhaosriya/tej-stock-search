from rest_framework.viewsets import ModelViewSet
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import action
from .serializers import StockSerializer,StockDetailSerializer
from ..models import Stock





class StockViewSet(ModelViewSet):
    serializer_class = StockSerializer
    queryset = Stock.objects.all()
    def get_serializer_class(self):
            if self.action == 'retrieve':
                return StockDetailSerializer
            
