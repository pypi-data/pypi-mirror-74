"""Quirk for Phillips LWB010."""
from zigpy.profiles import zll
from zigpy.quirks import CustomDevice
from zigpy.zcl.clusters.general import (
    OnOff,
    Basic,
    Identify,
    LevelControl,
    Scenes,
    Groups,
    Ota,
    GreenPowerProxy,
)

from zigpy.zcl.clusters.lightlink import LightLink

from zhaquirks.const import (
    ENDPOINTS,
    OUTPUT_CLUSTERS,
    INPUT_CLUSTERS,
    DEVICE_TYPE,
    PROFILE_ID,
    MODELS_INFO,
)
from zhaquirks.philips import PHILIPS, PhilipsOnOffCluster


class PhilipsLBW010(CustomDevice):
    """Philips LBW010 device."""

    signature = {
        MODELS_INFO: [(PHILIPS, "LWB010")],
        ENDPOINTS: {
            11: {
                # <SimpleDescriptor endpoint=11 profile=49246 device_type=528
                # device_version=2
                # input_clusters=[0, 3, 4, 5, 6, 8, 4096]
                # output_clusters=[25]
                PROFILE_ID: zll.PROFILE_ID,
                DEVICE_TYPE: zll.DeviceType.DIMMABLE_LIGHT,
                INPUT_CLUSTERS: [
                    Basic.cluster_id,
                    Identify.cluster_id,
                    Groups.cluster_id,
                    Scenes.cluster_id,
                    OnOff.cluster_id,
                    LevelControl.cluster_id,
                    LightLink.cluster_id,
                ],
                OUTPUT_CLUSTERS: [Ota.cluster_id],
            },
            242: {
                # <SimpleDescriptor endpoint=242 profile=41440 device_type=97
                # device_version=0
                # input_clusters=[33]
                # output_clusters=[33]
                PROFILE_ID: 41440,
                DEVICE_TYPE: 97,
                INPUT_CLUSTERS: [GreenPowerProxy.cluster_id],
                OUTPUT_CLUSTERS: [GreenPowerProxy.cluster_id],
            },
        },
    }

    replacement = {
        ENDPOINTS: {
            11: {
                PROFILE_ID: zll.PROFILE_ID,
                DEVICE_TYPE: zll.DeviceType.DIMMABLE_LIGHT,
                INPUT_CLUSTERS: [
                    Basic.cluster_id,
                    Identify.cluster_id,
                    Groups.cluster_id,
                    Scenes.cluster_id,
                    PhilipsOnOffCluster,
                    LevelControl.cluster_id,
                    LightLink.cluster_id,
                ],
                OUTPUT_CLUSTERS: [Ota.cluster_id],
            },
            242: {
                PROFILE_ID: 41440,
                DEVICE_TYPE: 97,
                INPUT_CLUSTERS: [GreenPowerProxy.cluster_id],
                OUTPUT_CLUSTERS: [GreenPowerProxy.cluster_id],
            },
        }
    }
