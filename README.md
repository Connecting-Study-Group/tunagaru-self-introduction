# tsunagaru-app

## Tech Stack

**Client:** React, Next.js, TypeScript, Mantine, pathpida, Prettier, ESLint

**Server:** Go

**OpenAPI:** openapi

## Set Up

```bash
$ git clone https://github.com/Connecting-Study-Group/tunagaru-self-introduction.git

$ cd tunagaru-self-introduction
```

### Client

Client では pnpm を使用しています。もし install していない方がいればこの機会にお願いします 🙇‍♂️

#### pnpm のインストール

```bash
$ brew install pnpm

or

$ npm install -g pnpm
```

#### set up

```bash
$ cd client

$ pnpm install

rootに.envファイルを作成し、運営者（ユウト: code-yy)に環境変数を貰ってください。

$ pnpm dev
```

### Server

Go を採用しているので、まだインストールしていない方はお願いします 🙇‍♂️

```bash
$ brew install go

& go version

go version go1.19.2 ~~~~ みたいなのが表示されればOK!
```

#### set up

```bash
$ go run main.go

localhost:8080が立ち上がります。
```

#### oapi-codegen: command not found というエラーが出た場合

Go のパスが通っていない可能性があります。
[こちらの記事](https://selfnote.work/20210513/programming/go-error-command-not-found/)を参考に、path を通してください！🙇‍♂️

### OpenAPI

スキーマ駆動開発を採用しているため、OpenAPI を採用しています。

openapi.yaml ファイルを generate する際に内部で Java を使って行っているため、Java のインストールをお願いします 🙇‍♂️(Docker 使ってなくてマジですみません。)

#### Java Install

参考: https://zenn.dev/satokazur222/articles/66568417b291d8

```bash
$ brew update

$ brew info java (まあまあ長いかもです😵)

$ brew install java

$ java --version

$ sudo ln -sfn $(brew --prefix)/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
```

#### Set Up

```bash
$ cd openapi

$ yarn

or

$ yarn install
```

#### 使い方

```bash
## openapi
$ https://stoplight.io/studioでopenapi.yamlを変更します。

$ yarn build:package (openapi.yamlの内容が、/outputs配下に自動でgenerateされます)

## client
$ rm -r node_modules

$ pnpm install

## server
$ ./generate.sh
```

## Feedback

If you have any feedback, please reach out to us at fake@fake.com
