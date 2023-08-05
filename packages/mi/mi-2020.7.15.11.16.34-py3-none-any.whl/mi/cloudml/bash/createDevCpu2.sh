# http://docs.api.xiaomi.net/cloud-ml/usage/request_quota_v2.html

#!/usr/bin/env bash
if [ -n "$1" ]
then name=$1
else name=cpu2
fi;

password=yuanjie
cloudml dev create -n $name -p $password \
-d cr.d.xiaomi.net/cloud-ml/tensorflow-gpu:33103tql2dev \
--priority_class preferred \
-hka h_browser@XIAOMI.HADOOP -hkt tql -he hdfs://zjyprc-hadoop \
-c 32 -M 88G \
-cm rw
