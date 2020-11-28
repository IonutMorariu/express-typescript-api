# Express API with Typescript starter

This repository was build as a simple tool to quickly get started with an Typescript Express API.
It uses mongodb as a DB but it can be easily swapped out with any other one.

## Initial Setup

To get started you need to have to follow these simple steps:

### 1. Have NodeJS v14 or newer installed

We actually don't need NodeJS on the host machine, since everything is ran inside the docker containers. But I recommend installing NodeJS and the modules when developing, for all the autocomplete and Intellisense provided to your IDE.

To check your node version, you can run:

```bash
    node -v
    output: v14.15.1
```

```bash
    npm -v
    output: 6.14.9
```

If you don't have NodeJS install you can download it [here](https://nodejs.org/en/download/).

### 2. Have docker & docker-compose installed

To check your docker version you can run:

```bash
    docker -v
    output: Docker version 19.03.13, build 4484c46d9d
```

If you don't have docker installed, you can get it here for [Windows](https://docs.docker.com/docker-for-windows/install/), [Mac](https://docs.docker.com/docker-for-mac/install/) and [Linux](https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script).

To check your docker-compose version you can run:

```bash
    docker-compose -v
    output: docker-compose version 1.27.4, build 40524192
```

If you don't have docker-compose installed, you can get [here](https://docs.docker.com/compose/install/).

### 3. Add domain to your hosts

This app is setup to use a virtual host domain for development. In order for the it to work, you have to add the hostname to your `/etc/hosts` file by running:

```bash
    echo "127.0.0.1 my-app.local" | sudo tee -a /etc/hosts
```

**Note**: You can replace `my-app.local` with any domain you want. If you do choose to create a different domain, you must update both `docker-compose` files at `line: 17` where it says:

```docker-compose
...
   environment:
      VIRTUAL_HOST: my-app.local
      VIRTUAL_PORT: 3000
...
```

### 4. Add a SSL support

In order to have SSL work on the host, you can run:

```bash
   sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./certs/my-app.local.key -out ./certs/my-app.local.crt
```

Fill out the different questions with any information you want, it won't matter since it's only for development purposes. In case you take this to production you will need a real certificate provided by companies such as [Let's encrypt](https://letsencrypt.org/).

**Note**: If you chose to create a different domain in [step 3](#add-domain-to-your-hosts), you must also update the name in the command above.

### 5. Give permission to the .sh scripts

In the folder there are two `bash` scripts named `dev-up.sh` and `dev-down.sh`. They are intented to facilitate starting up and stopping the dev environment. In order to allow them to run on you machine you have to give them permission by running:

```bash
    chmod +x dev-up.sh
    chmod +x dev-down.sh
```

## Startup

Once everything is installed and setup, start everything up but running:

```bash
    ./dev-up.sh
```

If you followed all the steps correctly, you should be able to go to [https://my-app.local/ping](https://my-app.local/ping) and see the word `pong` on your screen.

**NOTE**: If you have any problem, please let me know by opening an [issue](https://github.com/IonutMorariu/express-typescript-api/issues/new).
