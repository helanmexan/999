student stud;
ofstream oFile;
oFile.open("student.dat",ios::binary|ios::app);
stud.getdata();
oFile.write(reinterpret_cast<char *> (&stud), sizeof(student));
oFile.close();
     cout<<"\n\nStudent record Has Been Created ";
cin.ignore();
cin.get();
}
// read file records
void display_all()
{
student stud;
ifstream inFile;
inFile.open("student.dat",ios::binary);
if(!inFile)
{
cout<<"File could not be opened !! Press any Key to exit";
cin.ignore();
cin.get();
return;
}
cout<<"\n\n\n\t\tDISPLAYING ALL RECORDS\n\n";
while(inFile.read(reinterpret_cast<char *> (&stud), sizeof(student)))
