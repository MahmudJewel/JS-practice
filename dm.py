for i in range(l):
	for j in range(l-1):
		if(main_data[j]>main_data[j+1]):
			main_data[j],main_data[j+1]=main_data[j+1],main_data[j]