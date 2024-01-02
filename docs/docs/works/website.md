# Website Build

In this document, we will walk through the process of building official website and knowledge base. We will use Next.js
for official website and Docusaurus for knowledge base. Finally, we will deploy both on Tencent Cloud and bind them to
custom domain.

## Prerequisites

Before we begin, make sure we have the following:

1. A [Tencent Cloud](https://cloud.tencent.com/) account.
2. A registered domain name.
3. Basic knowledge of web development and server management.

## Step 1: Buy the Domain

We will need a domain name to host our website and knowledge base. We can buy one from a domain registrar
like [Namecheap](https://www.namecheap.com/) or [GoDaddy](https://www.godaddy.com/).

But today we use the domain name provided by Tencent Cloud.

1. Log in to Tencent Cloud account.
2. Navigate to the "Domain Registration" service and search for a domain name.
3. Add the domain name to the shopping cart and complete the purchase.

![Tencent](https://cdn.littleor.cn/assert/202310191638138.png)

## Step 2: Setting up Tencent Cloud Server

1. Log in to Tencent Cloud account.

2. Navigate to the "CVM (Cloud Virtual Machine)" service and create a new virtual machine (VM). Choose an appropriate
   configuration and select an operating system.

3. Set up network configurations and security groups to allow HTTP/HTTPS traffic.

4. Note the public IP address of VM as we will need it later.

## Step 3: Connect Domain with Server

1. Log in to domain registrar's website and access the domain management section.

2. Create a new DNS A record and point it to Tencent Cloud VM's public IP address (which is marked below).

3. Wait for DNS propagation, which might take up to 48 hours.

![DNS](https://cdn.littleor.cn/assert/202310191641639.png)

## Step 4: Building Official Website with Next.js

1. Install Node.js and npm on local machine if we haven't already.

```bash
# For mac we use `brew` to install Node.js and npm
brwe install node
```

![NODE](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3dScreenshot%202024-01-02%20at%2013.55.49.png)

2. Create a new [Next.js](https://nextjs.org/) project:

   ```bash
   npx create-next-app my-website
   cd my-website
   ```
   ![Creat](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3dScreenshot%202024-01-02%20at%2013.52.37.png)

   ![Creat](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3dScreenshot%202024-01-02%20at%2013.54.09.png)

3. Start building website by customizing the pages and components. We can refer
   to [Next.js documentation](https://nextjs.org/docs) for guidance.

4. When website is ready, use the following command to build a production-ready version:

   ```bash
   yarn build
   ```

5. Deploy Next.js website to Tencent Cloud VM using a service like Nginx or PM2. (See the Step 6)

6. Configure Nginx to serve website and set up SSL using Let's Encrypt for HTTPS. (See the Step 6)

## Step 5: Building Knowledge Base with Docusaurus

1. Install Node.js and npm on local machine if we haven't already, you can check this with:

   ```bash
   node -v
   git --version
   ```

![Node and Git](https://cdn.littleor.cn/assert/202310191644132.png)

2. Create a new Docusaurus project:

   ```bash
   npx @docusaurus/init@next init my-knowledge-base classic
   cd my-knowledge-base
   ```

3. Customize knowledge base content by editing Markdown files in the `docs` directory.

4. Modify the Docusaurus configuration in `docusaurus.config.js` to fit needs.

5. Build knowledge base:

   ```bash
   yarn build
   ```

![Build](https://cdn.littleor.cn/assert/202310191643893.png)

6. Deploy Docusaurus knowledge base to Tencent Cloud VM using a similar approach as website deployment.

## Step 6: Configure Nginx for Multi-Site Hosting

Since we have both website and knowledge base running on the same server, we need to configure Nginx to host both
applications.

1. Create Nginx server blocks for each site, pointing to the appropriate directories.

```bash
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

## Step 7: Finalize Configuration

1. Verify that both website and knowledge base are accessible through domain name.

2. Periodically update content on both the website and knowledge base as needed.

With these steps, we should have successfully built, deployed, and configured official website and knowledge base using
Next.js and Docusaurus, hosted on Tencent Cloud, and accessible via custom domain.

## More detail

### The fold and file relationship

We used the `monorepo` mode (all code in one repository) to manage the project, and the project structure is as follows:

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401021402993.png)

The `docs` folder is the documentation folder, which is used to store the documentation of the project. The `homepage`
folder is the official website folder, which is used to store the official website of the project.

### How to run git

We install `git` with `brew` on the mac, and then we can use the `git` command to manage the code.

```bash
# install git
brew install git
```

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401021632906.png)

And we clone the code to the local machine with the `git clone` command.

```bash
git clone git@github.com:NexMaker-Fab/2023zjude-Woodman123.git
cd 2023zjude-Woodman123
```

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401021632028.png)

Then we can use the `git` command to manage the code, here are some common commands examples:

```bash
# check the status of the code
git status
# add the code to the stage
git add .
# commit the code
git commit -m "feat: add the code"
# push the code to the remote repository
git push
```

### How to add picture

As we deploy the website on the Tencent Cloud, and we use our domain name to access the website, so we upload the
picture to the Aliyun OSS, and then we use the picture link to show the picture on the website.

First of all, we get the `AccessKey` and `AccessKeySecret` from the Aliyun OSS, and then we use the `PicGo` to upload
the picture to the Aliyun OSS:

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401021635293.png)

After we upload the picture to the Aliyun OSS, we can get the picture link, and we use the format to use:

```markdown
![Image Caption](Image URL)
```

### How to write the first document

As we use the `monorepo` mode to manage the project, so we need to write the document in the `docs` folder, and we use
the Markdown to write the document.

First of all, we need to create a new folder in the `docs` folder, which called `docs/docs`, and we write
a `about/team.md` file in the `docs/docs` folder, and we use the following format to write the document:

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401021637303.png)

With write the document, we can use `yarn build` to build the document, and we can use `yarn start` to start the website:

![](https://bosiden-pop.oss-cn-hangzhou.aliyuncs.com/pattern/other/other/3d202401021638887.png)
