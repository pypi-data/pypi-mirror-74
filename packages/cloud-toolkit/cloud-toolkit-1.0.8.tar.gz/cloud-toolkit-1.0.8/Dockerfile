FROM python:3.7-stretch

WORKDIR /data/

COPY ./ ./

RUN pip3 install -r /data/requirements.txt
RUN pip3 install -r /data/requirements-mgmt.txt

CMD ["python3", "/data/mgmt.py"]