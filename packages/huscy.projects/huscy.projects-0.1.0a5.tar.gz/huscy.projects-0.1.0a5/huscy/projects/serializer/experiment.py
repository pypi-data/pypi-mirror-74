from rest_framework import serializers

from .session import SessionSerializer
from huscy.projects.models import Experiment
from huscy.projects.services import create_experiment


class ExperimentSerializer(serializers.ModelSerializer):
    order = serializers.IntegerField(required=False)
    title = serializers.CharField(required=False)

    class Meta:
        model = Experiment
        fields = (
            'description',
            'id',
            'order',
            'project',
            'title',
        )

    def create(self, validated_data):
        return create_experiment(**validated_data)

    def to_representation(self, experiment):
        response = super().to_representation(experiment)
        response['sessions'] = SessionSerializer(experiment.sessions.all(), many=True).data
        return response
