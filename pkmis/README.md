# PKMIS - DASHBOARD

### 1. Create .env file in the root of nextjs project

```bash
# database connection string
DATABASE_URL=postgresql://username:password@hostname:5432/pkmis_db

# node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
SECRET=your_secret_key

# default login pkmis
ADMIN_DEFAULT_USERNAME=username
ADMIN_DEFAULT_EMAIL=email
ADMIN_DEFAULT_PASSWORD=password

```

### 2. Run the following commands

```bash
# 1. install required dependencies
npm install

# 2. pull database schema to prisma.schema
npm run db:pull

# 3. generate prisma client
npm run db:generate

# 4. run seed for default user account for PKMIS
npm run db:seed

# 5. start project
npm run dev
```
