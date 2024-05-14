FROM python:3.9.19-bullseye
RUN apt update && apt upgrade -y

RUN apt-get install python3.9-dev default-libmysqlclient-dev build-essential pkg-config -y

ENV HOME_DIR=/home/django/
ENV APP_PATH=${HOME_DIR}/nasa_site

RUN mkdir -p ${APP_PATH}
WORKDIR ${APP_PATH}
COPY . .
RUN pip install --no-cache-dir -r req.pip

RUN addgroup --system django
RUN adduser --system --group django

RUN chown -R django:django ${HOME_DIR}

USER django
