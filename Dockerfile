# Node.js 20 버전을 베이스 이미지로 사용
FROM node:20

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# 애플리케이션 의존성 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 애플리케이션 소스 복사
COPY . .

# 애플리케이션 시작 명령
CMD [ "node", "app.js" ]
