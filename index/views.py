from django.conf import settings
from django.core.mail import send_mail
from django.http import HttpResponse


def ajax(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        tel = request.POST.get('tel')
        email = request.POST.get('email')
        message = request.POST.get('message')

        if (name == '') or (len(name) < 2):
            return HttpResponse('name_error', content_type='text/html')

        try:
            if not '.' in email.split('@')[1]:
                return HttpResponse('email_error', content_type='text/html')

        except:
            return HttpResponse('email_error', content_type='text/html')

        br = '\n'
        data = name + br + tel + br + email + br + message

        subject = 'feedBackForm'

        send_mail(subject, data, settings.EMAIL_HOST_USER, ['qreditry@gmail.com'], fail_silently=False)

        return HttpResponse('ok', content_type='text/html')
