#include<iostream>
#include<vector>
#include<algorithm>

using ll = long long;

using namespace std;

int main() {
    int n,counter=0;
    ll max = -1e18;
    cin >> n;
    ll temp=0;
    vector <ll> v1;
    for (auto i=0; i<n; i++) {
        cin >> temp;
        v1.push_back(temp);
    }  
    counter = v1.size();
    sort(v1.begin(),v1.end());
    for (auto i : v1) {
        if (max < (i*counter)) {
            max = i*counter;
        } 
        counter--;
    } 
    cout << max;
    return 0;
}