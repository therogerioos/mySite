---
layout: style
title: Tutoriais
page_number: 1
last_page: 1
pagemax: 3
---

<div class="cabeca-post">
  <h1 class="name-page">Blog & Tutoriais</h1>
  <h3>Página {{ page.page_number }} de {{ page.pagemax }}</h3>
  <div class="pagination">
            <a href="#" class="page-link voltar" onclick="goToPreviousPagett()"><i class="fa-solid fa-angles-left"></i> Voltar</a>
            <a href="#" class="page-link ir" id="pagination-link-tt" data-page-number="{{ page.page_number }}" data-last-page="{{ page.last_page }}" onclick="goToNextPagett()">Próximo <i class="fa-solid fa-angles-right"></i></a>
  </div>
</div>
<div class="grid">
  {% for post in site.posts %}
    {% if post.path contains '/tutoriais/page1' %}
      <div class="card-post">
        <img src="{{ post.image }}" alt="{{ post.title }}">
        <div class="text-post">
          <a class="title-post" href="{{ post.url }}"><h2>{{ post.title }}</h2></a>
          <h4>{{ post.resumo }}</h4>
        </div>
      </div>
    {% endif %}
  {% endfor %}
  
</div>