from django import forms
from .models import Post, Comment


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('title', 'select1_content', 'select2_content',)


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fiels = ('content',)