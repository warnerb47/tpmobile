package io.ionic.starter;

import ch.byrds.capacitor.contacts.Contacts;
import com.getcapacitor.Plugin;
import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
            // Additional plugins you've installed go here
            // Ex: add(TotallyAwesomePlugin.class);
            add(Contacts.class);
        }});
    }
}
