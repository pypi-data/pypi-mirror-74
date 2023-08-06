from functools import update_wrapper

import django
from django.contrib import admin
from django.contrib.admin import helpers
from django.shortcuts import redirect, render
from django.template import RequestContext

from .forms import OneOffPointAwardForm
from .models import AwardedPointValue, PointValue


class AwardedPointValueAdmin(admin.ModelAdmin):
    list_display = ["pk", "reason_display", "target", "points"]
    fields = ["target_user", "value", "timestamp"]

    def target(self, obj):
        if obj.target_user_id:
            return obj.target_user
        else:
            return obj.target_object

    def reason_display(self, obj):
        if obj.value_id:
            return obj.value.key
        else:
            if obj.reason:
                return obj.reason
            else:
                return None

    reason_display.short_description = "reason"

    def get_urls(self):
        from django.conf.urls import url

        urlpatterns = super(AwardedPointValueAdmin, self).get_urls()

        def wrap(view):
            def wrapper(*args, **kwargs):
                return self.admin_site.admin_view(view)(*args, **kwargs)

            return update_wrapper(wrapper, view)

        if django.VERSION < (1, 7):
            info = self.model._meta.app_label, self.model._meta.module_name
        else:
            info = self.model._meta.app_label, self.model._meta.model_name
        return [url(
                r"^one_off_points/$",
                wrap(self.one_off_points),
                name="{0}_{1}_one_off_points".format(info[0], info[1])
                )] + urlpatterns

    def one_off_points(self, request):
        if request.method == "POST":
            form = OneOffPointAwardForm(request.POST)
            if form.is_valid():
                form.award()
                return redirect("admin:points_awardedpointvalue_changelist")
        else:
            form = OneOffPointAwardForm()
        form = helpers.AdminForm(
            form=form,
            fieldsets=[(None, {"fields": form.base_fields.keys()})],
            prepopulated_fields={},
            model_admin=self
        )
        ctx = {
            "opts": self.model._meta,
            "form": form,
        }
        ctx = RequestContext(request, ctx)
        return render(request, "pinax/points/one_off_points.html", ctx)


admin.site.register(AwardedPointValue, AwardedPointValueAdmin)
admin.site.register(PointValue)
