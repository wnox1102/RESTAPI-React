from django.db import models

# Create your models here.
class Sucursal(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Job(models.Model):
    name = models.CharField(max_length=30)
    def __str__(self):
        return self.name

class Genero(models.Model):
    sexo = models.CharField(max_length=30)
    def __str__(self):
        return self.sexo

class Employee(models.Model):
    ci = models.CharField(max_length=30)
    name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    phone = models.CharField(max_length=30)
    points = models.CharField(max_length=30)
    adress = models.CharField(max_length=40)
    fkgender = models.ForeignKey(Genero, on_delete=models.CASCADE)
    job_id = models.ForeignKey(Job, on_delete=models.CASCADE)
    def __str__(self):
        return self.name
    
        


