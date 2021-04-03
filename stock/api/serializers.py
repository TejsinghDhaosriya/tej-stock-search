from rest_framework import serializers

from stock.models import Stock

class StockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = ['id','name']


class StockDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stock
        fields = '__all__'


