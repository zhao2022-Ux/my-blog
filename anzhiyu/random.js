var posts=["article/P10314 [SHUPC 2024] 函数/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };