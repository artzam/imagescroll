        let scrollContainer = document.querySelector(&#39;.gallery&#39;);
let backBtn = document.getElementById(&quot;back1Btn&quot;);
let nextBtn = document.getElementById(&quot;next1Btn&quot;);

scrollContainer.addEventListener(&quot;wheel&quot;, (evt) =&gt; {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = &#39;auto&#39;;
});

nextBtn.addEventListener(&quot;click&quot;, ()=&gt;{
    scrollContainer.style.scrollBehavior = &#39;smooth&#39;;
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener(&quot;click&quot;, ()=&gt;{
    scrollContainer.style.scrollBehavior = &#39;smooth&#39;;
    scrollContainer.scrollLeft -= 900;
});
