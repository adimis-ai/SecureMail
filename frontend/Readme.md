# /sendMail Route

## REQUEST:
```JSON
{
  "sender_email": "adimis.ai.001@gmail.com",
  "sender_password": "daooitkluzxjjtna",
  "receiver_email": "blockchain.adimis@gmail.com",
  "receivers_emails": [],
  "message_body": "This is a test message."
}
```

## RESPONSE:
```JSON
{
  "alert": "SENT",
  "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIBPQIBAAJBAIt0C/rOuSNfrccdczoGbodnKsm8mPNzYCD8+Lr1TvzjJpLWqK8O\n15dT1ibxBtQeYkaqVwXE0RqEHdq2lpmKINMCAwEAAQJAYDEeClUKE8JtxkkkMEQ7\nfZ7GPv2eq19MUbTthVisT0av0wmdzHryAQdFHjfzH+HnEZXsbsNheJ/BXpbHqKXo\nEQIjAI5aFt+jH78BLt9UVXuNx2d/3wxHdW2Iur06X5PIE+Q+3yUCHwD6yYpO7XqG\nZ6ordb6RW5n+f9kWimMgE0DqsT0D2pcCIle3HYcaXhJ1KSvGLJJgj7Gv8oH/elVP\nPjohwQkv7Unkj90CHwCS4tJYUi2OZU89LzSTzJQQhO8wjZNraPt/upmjFTcCIwCB\n8iADLQnc8gToN3FWhpJORW+n4v21cn9jjygw4nHC+MLm\n-----END RSA PRIVATE KEY-----\n"
}
```

## REQUEST:
```JSON
{
  "sender_email": "adimis.ai.001@gmail.com",
  "sender_password": "daooitkluzxjjtna",
  "receiver_email": "",
  "receivers_emails": ["blockchain.adimis@gmail.com", "adisrm0001@gmail.com"],
  "message_body": "This is a test message."
}
```

## RESPONSE:
```JSON
{
  "alert": "SENT",
  "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIBPAIBAAJBAKe5ayGFlB+/Ae6ATsD0kj7vy0T5TdZcmfbmHpNLqZ2WVfs7w8Zk\nWc70PNN5bgmFYC48TeM/EMenGNZBgfEe/RECAwEAAQJAXf97e+D5/8Szl2/PMzKe\nF6maOQCjT+S74PRc5F39oZxqgb7qKBn15oN8HWqXmZRTfh4GZmpCUt8WOtLtypqP\n8QIjAOkF3IvwbCdtEB3oTXZ5XiQPE6lOvuy3FDc3Mrrp2/Z/A2UCHwC4Qz2bzpd2\n0nPZj1O8CG751f90g6mGsKB5gtqGlj0CIgXzumBwsbKIHKNG7cOa8galw/DNLB9L\nxd5rMIaJtq6jK+kCHhDHjsSxe3mGkKYvNyDYY8K8ihbCJp3tV6+5Cs1WwQIjAIIL\nBMKI1uEifR3aA1XxjyfRlhHz8JOer1yknXJlUSDH3Xs=\n-----END RSA PRIVATE KEY-----\n"
}
```



# /decrypt Route:

## EMAIL RECEIVED BY RECEIVER:
```
gubGN4Y7MmD3ZxcwNR9eBI0o+aRojsfpaKaoqVotgIVbDB0+m+ah7x7Vr+FA7w4ql/iEo1QZLsZSTe1p/v58HA==
```

## REQUEST
```json
{
  "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIBPAIBAAJBAKe5ayGFlB+/Ae6ATsD0kj7vy0T5TdZcmfbmHpNLqZ2WVfs7w8Zk\nWc70PNN5bgmFYC48TeM/EMenGNZBgfEe/RECAwEAAQJAXf97e+D5/8Szl2/PMzKe\nF6maOQCjT+S74PRc5F39oZxqgb7qKBn15oN8HWqXmZRTfh4GZmpCUt8WOtLtypqP\n8QIjAOkF3IvwbCdtEB3oTXZ5XiQPE6lOvuy3FDc3Mrrp2/Z/A2UCHwC4Qz2bzpd2\n0nPZj1O8CG751f90g6mGsKB5gtqGlj0CIgXzumBwsbKIHKNG7cOa8galw/DNLB9L\nxd5rMIaJtq6jK+kCHhDHjsSxe3mGkKYvNyDYY8K8ihbCJp3tV6+5Cs1WwQIjAIIL\nBMKI1uEifR3aA1XxjyfRlhHz8JOer1yknXJlUSDH3Xs=\n-----END RSA PRIVATE KEY-----\n",
  "encrypted_message": "gubGN4Y7MmD3ZxcwNR9eBI0o+aRojsfpaKaoqVotgIVbDB0+m+ah7x7Vr+FA7w4ql/iEo1QZLsZSTe1p/v58HA=="
}
```

{
  "private_key": "-----BEGIN RSA PRIVATE KEY-----\nMIIBPAIBAAJBAKOIA93HbT9lZPYrv3aLgwbfLh2uS9FrFoXkba65x/me6YY+QlKa\njG0RZRg6p0b9EcgYBjaT78TWnc8wLJPAxs0CAwEAAQJAJwaWpZ6qG67+4SCfmJLC\nuikYwEyQG3IK9fkFk+UR9NJWd8NgBbD6dA4yEdThc/glEvp4M7RT0Zz0whTs4Pzk oQIjAOffajUbU9SwaBIkJK4yCy1yG+suxiCzgcw2bDpFpGX5/iMCHwC0jCI8X7jv\ngiYW9ci5CVKjqnGYjEDlOqH7s/Lz3k8CIhFnVHpt9anWH8mUyugEO5CKqwvI8/gK\nYSipwQ/SoFdDH08CHkWeb6kmJBK+9d8OoXqwXJxdofX3xyJdLI75QarFwwIjAKbO E+qT/O+/APRczaa1HGLfJ9shAOxUh+tvvULM0mx96bA=\n-----END RSA PRIVATE KEY-----",
  "encrypted_message": "YDpGI0+ud6rQuqiJ7E3HS2dd1bRugwM/8Ud4jlbQg4IBNF1f3vTwpRZFbJGPPg86CAXMrQFXStvwEvM/k1FX9g=="
}

## RESPONSE:
```JSON
{
  "message": "This is a test message."
}
```