#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int check=0;
int found=0;
//struct for node
struct node {
    char *value;            // all void* types replaced by char*
    struct node *p_left;
    struct node *p_right;
};

int my_strlen(char * s) 
{
    return strlen(s);
}

void my_strcpy(char *str1, char *str2)//str2 is source, str1 is dest
{
    strcpy(str1,str2);
}

int my_strcmp(const char *a, const char *b)
{
    return strcmp(a,b);
}
//inserts elements into the tree
void insert(char* key, struct node** leaf)
{
    int t;
    if(*leaf == NULL) 
    {
        *leaf = (struct node*)malloc(sizeof(struct node));
        (*leaf)->value = malloc(my_strlen(key)+1);
        my_strcpy((*leaf)->value,key);
        (*leaf)->p_right = NULL;
        (*leaf)->p_left = NULL;
    }

    else
    {
        t = my_strcmp(key,(*leaf)->value);
        if(t<0) insert(key,&(*leaf)->p_left);
        else if(t>0) insert(key,&(*leaf)->p_right);
        else  check=-1; 
    }
}


//recursive function to print out the tree inorder
void asc_order(struct node *root)
{
    if(root!=NULL)
    {
        asc_order(root->p_left);
        printf("%s\n", root->value);
        asc_order(root->p_right);
    }
}



//searches elements in the tree
void search(char* key, struct node* leaf)  // no need for **
{
    int ele;
    if(leaf!=NULL)
    {
        ele = my_strcmp(key, leaf->value);
        if(ele<0)
            search(key,leaf->p_left);
        else if(ele>0)
            search(key,leaf->p_right);
        else
            found=1;
    }
    else return;
    
}

int main()
{
    struct node *p_root = NULL;
    char *value;
    size_t malloc_size = 100;
    int size;
    int temp=100;
    scanf("%d",&size);
    int i;
    //reading the input and inserting in the tree
    char *srn[size];
    for (i = 0; i < size; i++) 
    {
        srn[i] = malloc(malloc_size * sizeof(char)); /* allocates 100 bytes */
        scanf("%99s", srn[i]);
        insert(srn[i],&p_root);
    }   
    char searchname[temp];
    scanf("%s",searchname);

    //checking inorder print
    asc_order(p_root);

    //checking for 1 or more duplicate insertions
    printf("%d\n",check);

    //searching a string in the tree
    search(searchname,p_root);
    printf("%d\n",found);
    return 0;
}