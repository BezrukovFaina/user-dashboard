#!/bin/bash

# User Dashboard Project

# Install dependencies
pip install -r requirements.txt

# Run the application
python app.py

# Run tests
pytest

# Run linter
flake8 .

# Run type checker
mypy .