#include <iostream>
#include <vector>
using namespace std;

class family
{
private:
    int menbers_in_family = 7;
    vector<string> names_of_family_members = {" Narayan ", "Rajendra", "Laxmi", "Anjali", "Aayush", " Kunj ", "Srashti"};

    void getnames_of_family_members(){
        return ;
    }

};

int main()
{

    family older;
    cout << " Name of oldest man in family :-> " << older.names_of_family_members[0] << endl;
}