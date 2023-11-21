URL                 HTTP Verb       Action      Description
/posts              GET             index       Show all post
/posts/new          GET             new         Show new form
/posts              POST            create      Create new post and redirect
/posts/:id          GET             show        Show post with this :id
/posts/:id/edit     GET             edit        Show edit form for post with this:id
/posts/:id           PUT/PATCH       update     Update post with this :id & 
                                                redirect 
/posts/:id          DELETE          destroy     Delete post with this :id and 
                                                redirect      