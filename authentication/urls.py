from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name = 'home'),
    path('activate/<uidb64>/<token>', views.activate, name='activate'),
    path('register/',views.signup, name='register'),
    path('login/',views.signin, name='login'),
    path('signout',views.signout, name='signout'),

   path('accounts/', include('allauth.urls')),
]


