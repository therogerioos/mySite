---
layout: style
title: Tutoriais
---

<h1>Tutoriais</h1>
<div class="grid">
  {% for post in site.posts %}
    {% if post.path contains '/tutoriais/' %}
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
