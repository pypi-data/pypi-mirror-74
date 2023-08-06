# jsonpp
> JSON commandline prettifier


## Install
```shell script
$ pip install jsonpp
```

## Usage

 ```shell script
$ echo '{"userId": 1,"id": 1,"title": "foo bar","completed": false}' | jsonpp  
```
![echo](https://github.com/sahil865gupta/jsonpp/blob/master/assets/echo.png)

```shell script
$ curl  https://jsonplaceholder.typicode.com/todos/1 | jsonpp   
```

![curl](https://github.com/sahil865gupta/jsonpp/blob/master/assets/curl.png)
