# Insertion Sort

> [22,27,16,2,18,6] => Insertion Sort 

##### 1. Insertion sor aşamalarını yazınız.

> [22,27,16,2,18,6] =>  (n)
[2,27,16,22,18,6] =>  (n-1)
[2,6,16,22,18,27] =>  (n-2)
[2,6,16,18,22,27] =>  (1)


##### 2. Big-O gösterimini yapınız.

> n + (n-1) + (n-2) + 1 = n.(n+1) / 2 
(n^2 +n) / 2 = O(n^2)

##### 3. Average Case, Worst Case, Best Case durumlarını bulun.

> Average Case: [2,6,16,18,22,27]  16 ve 18
Worst Case: [2,6,16,18,22,27] 27
Best Case: [2,6,16,18,22,27]  2

##### 4. Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer?

> Avarage Case

##### Aşağıdaki dizinin Insertion Sort'a göre ilk 4 adımını yazınız.

> [7,3,5,8,2,9,4,15,6] 

> [7,3,5,8,2,9,4,15,6] => (n) 
[2,3,5,8,7,9,4,15,6] => (n-1) 
[2,3,4,8,7,9,5,15,6] => (n-2) 
[2,3,4,5,7,9,8,15,6] => (n-3)


# Merge Sort

##### 1.Aşağıdaki dizinin merge sort türüne göre aşamalarını yazınız.

> [16,21,11,8,12,22] -> Merge Sort


>[16,21,11,8,12,22]
[16,21,11]   [8,12,22]
[16] - [21,11]   [8] - [12,22]
[16] - [21] - [11]   [8] - [12] - [22]
[16] - [11,21]   [8] - [12,22]
[11,16,21]   [8,12,22]
[8,11,12,16,21,21]


##### 2.Big-O gösterimini yazınız.
> n = 2^x
logn = x
O(n logn) => her ayırma ve birleştirme işlemde O(n) geliyor


# Binary Search Tree 

##### 1 Aşağıdaki dizinin Binary-Search-Tree aşamalarını yazınız.
> [7, 5, 1, 8, 3, 6, 0, 9, 4, 2]
> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

Root Değer = 5
Dengeli bir dağılım için;
Sağında = 7
Solunda = 3

					 5
				 3		 7	
			  2	   4   6   8
		 1				 9
	0			
