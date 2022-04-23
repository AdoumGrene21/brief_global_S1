from django.contrib.auth.models import User
from django.db import models

class Eleve(models.Model):
    
  

    CHOICES_SEXES = (
        ('masculin','Masculin'),
        ('feminin', 'Feminin'),
    )
     
    nom = models.CharField(max_length=50)
    prenom = models.CharField(max_length=50)
    sexe = models.TextField(choices=CHOICES_SEXES, null=True )
    date_naissance = models.DateField(auto_now_add=False, null=True)
    lieu_naissance = models.CharField(max_length=50)
    addresse = models.CharField(max_length=255)
    email = models.EmailField()
    telephone = models.CharField(max_length=255)
    created_by = models.ForeignKey(User, related_name='user', on_delete=models.CASCADE)
    created_at= models.DateTimeField(auto_now_add=True)
    modified_at= models.DateTimeField(auto_now=True)