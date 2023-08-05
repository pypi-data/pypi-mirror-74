#!/bin/sh
localproxy --config /data/.aws_tunnel.ini &
echo 'waiting localproxy ready...'
sleep 5
echo 'starting usr command...'
$1