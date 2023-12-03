---
layout: style
title: Portfólio

---

<h1>Portfólio</h1>
<div class="grid">
  {% for post in site.posts %}
    {% if post.path contains '/portfolio/' %}
      <div class="card">
        <a href="{{ post.url }}">
          <img src="{{ post.image }}" alt="{{ post.title }}">
          <h2>{{ post.title }}</h2>
          <p>{{ post.excerpt }}</p>
        </a>
      </div>
    {% endif %}
  {% endfor %}
</div>
