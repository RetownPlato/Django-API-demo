```sequence
Frontend->Django REST API:Send image
Django Rest API->Baidu API:Send image
Note left of Frontend:User login and send requests
Baidu API->Django Rest API:Results
Note right of Baidu API:Deal with images
Django REST API->Frontend:Results
Note left of Frontend:Render results
```

