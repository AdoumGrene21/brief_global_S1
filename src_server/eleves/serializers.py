from rest_framework import serializers
from .models import Eleve

class EleveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eleve

        read_only_fields = (
            'created_by',
            'created_at',
            'modified_at',
        ),

        fields = (
            'id',
            'nom',
            'prenom',
            'sexe',
            'date_naissance',
            'lieu_naissance',
            'addresse',
            'email',
            'telephone',
            )

