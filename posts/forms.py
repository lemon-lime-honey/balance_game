from django import forms
from .models import Post, Comment


class PostForm(forms.ModelForm):
    title = forms.CharField(
        label='제목',
        widget=forms.TextInput(
            attrs={
                'class': 'form-control',
                'placeholder': '제목을 입력하세요',
            }
        )
    )
    select1_content = forms.CharField(
        label='1번 선택지',
        widget=forms.Textarea(
            attrs={
                'class': 'form-control',
                'placeholder': '선택지를 입력하세요',
                'style': 'height: 10em;',
            }
        )
    )
    select2_content = forms.CharField(
        label='2번 선택지',
        widget=forms.Textarea(
            attrs={
                'class': 'form-control',
                'placeholder': '선택지를 입력하세요',
                'style': 'height: 10em;',
            }
        )
    )
    class Meta:
        model = Post
        fields = ('title', 'select1_content', 'select2_content',)


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('content',)