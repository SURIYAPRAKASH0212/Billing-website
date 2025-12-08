# User Data Storage Location

## User Account Details

User details (email, password, role) are stored in **localStorage** with the key:

```
naanzy:users
```

### Storage Structure:
```javascript
{
  "user@example.com": {
    "email": "user@example.com",
    "password": "userpassword123",
    "role": "user", // or "admin"
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### How to View:
1. Open browser Developer Tools (F12)
2. Go to "Application" tab (Chrome) or "Storage" tab (Firefox)
3. Expand "Local Storage"
4. Click on your website URL
5. Look for the key: `naanzy:users`
6. Click on it to see all registered users

### Other Data Stored:
- **Favorites**: `naanzy:favorites` - User's favorite dishes
- **Orders**: `freshbite:orders` - All order history
- **Cart**: `freshbite:cart` - Current cart items
- **Dishes**: `freshbite:dishes` - Menu dishes
- **Auth**: `freshbite:auth` - Current logged-in user session
- **Restaurant Status**: `freshbite:restaurantStatus` - Shop open/closed status

