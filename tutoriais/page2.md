---
layout: style
title: Tutoriais
page_number: 2
last_page: 0
---

<h1 class="name-page">Tutoriais</h1>
<div class="grid">
  <div class="pagination">
            <a href="#" class="page-link voltar" onclick="goToPreviousPagett()"><i class="fa-solid fa-angles-left"></i> Voltar</a>
            <a href="#" class="page-link ir" id="pagination-link" data-page-number="{{ page.page_number }}" data-last-page="{{ page.last_page }}" onclick="goToNextPagett()">Próximo <i class="fa-solid fa-angles-right"></i></a>
  </div>
  {% for post in site.posts %}
    {% if post.path contains '/tutoriais/page2' %}
      <div class="card-post">
        <img src="{{ post.image }}" alt="{{ post.title }}">
        <div class="text-post">
          <a class="title-post" href="{{ site.baseurl }}{{ post.url }}"><h2>{{ post.title }}</h2></a>
          <h4>{{ post.resumo }}</h4>
        </div>
      </div>
    {% endif %}
  {% endfor %}
  
</div>