import os
from dotenv import load_dotenv

load_dotenv()

DB_NAME=os.environ.get('DB_NAME')
DB_USER=os.environ.get('DB_USER')
DB_PASS=os.environ.get('DB_PASS')
DB_HOST=os.environ.get('DB_HOST')
DB_PORT=os.environ.get('DB_PORT')

SECRET_KEY=os.environ.get('SECRET_KEY')