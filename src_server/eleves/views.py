from django.shortcuts import render

from rest_framework import viewsets
 
from .models import Eleve
from .serializers import EleveSerializer

class EleveViewSet(viewsets.ModelViewSet):
    serializer_class = EleveSerializer
    queryset = Eleve.objects.all()

    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.user)
        


    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


  


