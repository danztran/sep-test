# SEP-TEST

#### STRUCTURE: ``VUE`` & ``EXPRESS``

### Installation
Clone the project then run the script below:
```bash
git clone https://github.com/danztran/sep-test.git
cd ./sep-test
npm install
```
### Start
#### #To start dev mode
Run the command below then access url: [http://localhost:8080/](http://localhost:8080/)
```
npm run dev
```
#### #To build & run server
Run the command below then access url: [http://localhost:3000/](http://localhost:3000/)
```
npm run build && npm start
```
#### #To run separate client or server
```
npm run client
npm run server
```
### Deploy
#### #Deploy with newest version:
```
npm run deploy
```
#### #Deploy with specific commit version:
```
npm run deploy:at $COMMIT
```
For example: Deploy at commit ``ae5dx4c56sad59e5asdzxj``
```
npm run deploy:at ae5dx4c
```