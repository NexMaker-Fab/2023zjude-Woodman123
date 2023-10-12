# Website Build

In this document, we will walk through the process of building official website and knowledge base. We will use Next.js for official website and Docusaurus for knowledge base. Finally, we will deploy both on Tencent Cloud and bind them to custom domain.

## Prerequisites

Before we begin, make sure we have the following:

1. A [Tencent Cloud](https://cloud.tencent.com/) account.
2. A registered domain name.
3. Basic knowledge of web development and server management.

## Step 1: Setting up Tencent Cloud Server

1. Log in to Tencent Cloud account.

2. Navigate to the "CVM (Cloud Virtual Machine)" service and create a new virtual machine (VM). Choose an appropriate configuration and select an operating system.

3. Set up network configurations and security groups to allow HTTP/HTTPS traffic.

4. Note the public IP address of VM as we will need it later.

## Step 2: Setting Up Domain

1. Log in to domain registrar's website and access the domain management section.

2. Create a new DNS A record and point it to Tencent Cloud VM's public IP address.

3. Wait for DNS propagation, which might take up to 48 hours.

## Step 3: Building Official Website with Next.js

1. Install Node.js and npm on local machine if we haven't already.

2. Create a new Next.js project:

   ```bash
   npx create-next-app my-website
   cd my-website
   ```

3. Start building website by customizing the pages and components. We can refer to Next.js documentation for guidance.

4. When website is ready, use the following command to build a production-ready version:

   ```bash
   npm run build
   ```

5. Deploy Next.js website to Tencent Cloud VM using a service like Nginx or PM2.

6. Configure Nginx to serve website and set up SSL using Let's Encrypt for HTTPS.

## Step 4: Building Knowledge Base with Docusaurus

1. Install Node.js and npm on local machine if we haven't already.

2. Create a new Docusaurus project:

   ```bash
   npx @docusaurus/init@next init my-knowledge-base classic
   cd my-knowledge-base
   ```

3. Customize knowledge base content by editing Markdown files in the `docs` directory.

4. Modify the Docusaurus configuration in `docusaurus.config.js` to fit needs.

5. Build knowledge base:

   ```bash
   npm run build
   ```

6. Deploy Docusaurus knowledge base to Tencent Cloud VM using a similar approach as website deployment.

## Step 5: Configure Nginx for Multi-Site Hosting

Since we have both website and knowledge base running on the same server, we need to configure Nginx to host both applications.

1. Create Nginx server blocks for each site, pointing to the appropriate directories.

```azure
    location /docs {
      alias */docs/build;
      index index.html;
    }
    location / {
      proxy_pass http://127.0.0.1:3100/;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header REMOTE-HOST $remote_addr;
      proxy_cache_bypass no_cache;
    }
```

2. Set up server names (domain names) and SSL certificates for both sites.

3. Test Nginx configuration and restart Nginx:

   ```bash
   sudo nginx -t
   sudo service nginx restart
   ```

## Step 6: Finalize Configuration

1. Verify that both website and knowledge base are accessible through domain name.

2. Periodically update content on both the website and knowledge base as needed.

With these steps, we should have successfully built, deployed, and configured official website and knowledge base using Next.js and Docusaurus, hosted on Tencent Cloud, and accessible via custom domain.
